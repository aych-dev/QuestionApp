'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CategoryTypes } from './TicketCard';

interface Props {
  ticket: CategoryTypes | undefined;
}

const TicketForm = ({ ticket }: Props) => {
  const router = useRouter();
  const startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'not started',
    category: 'Hardware Problem',
  };

  const [formData, setFormData] = useState(startingTicketData);
  if (ticket === undefined) {
    return null;
  }
  const EDITMMODE = ticket._id === 'new' ? false : true;

  if (EDITMMODE) {
    startingTicketData['title'] = ticket.title;
    startingTicketData['description'] = ticket.description;
    startingTicketData['priority'] = ticket.priority;
    startingTicketData['progress'] = ticket.progress;
    startingTicketData['status'] = ticket.status;
    startingTicketData['category'] = ticket.category;
  }

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (EDITMMODE) {
        const res = await fetch(`/api/Tickets/${ticket._id}`, {
          method: 'PUT',
          body: JSON.stringify({ formData }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error('Failed To Update Ticket');
        }
      } else {
        const res = await fetch('/api/Tickets', {
          method: 'POST',
          body: JSON.stringify({ formData }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error('Failed to create ticket');
        }
      }

      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className='flex justify-center'>
      <form
        className='flex flex-col gap-3 w-1/2'
        method='post'
        onSubmit={handleSubmit}
      >
        <h3>{EDITMMODE ? 'Update Your Ticket' : 'Create A Ticket'}</h3>
        <label>Title</label>
        <input
          id='title'
          name='title'
          type='text'
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id='description'
          name='description'
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />

        <label htmlFor=''>Category</label>
        <select
          name='category'
          value={formData.category}
          onChange={handleChange}
        >
          <option value='Hardware Problem'>Hardware Problem</option>
          <option value='Software Problem'>Software Problem</option>
          <option value='Problem'>Problem</option>
        </select>

        <label>Priority </label>
        <div>
          <input
            type='radio'
            id='priority-1'
            name='priority'
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1 </label>
          <input
            type='radio'
            id='priority-2'
            name='priority'
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2 </label>
          <input
            type='radio'
            id='priority-3'
            name='priority'
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3 </label>
        </div>
        <input
          type='range'
          id='progress'
          name='progress'
          onChange={handleChange}
          value={formData.progress}
          min={0}
          max={100}
        />
        <label>Status </label>
        <select name='status' value={formData.status} onChange={handleChange}>
          <option value='not started'>Not Started</option>
          <option value='started'>Started</option>
          <option value='done'>Done</option>
        </select>
        <input
          type='submit'
          className='btn border cursor-pointer'
          value={EDITMMODE ? 'Update Your Ticket' : 'Create Ticket'}
        />
      </form>
    </div>
  );
};

export default TicketForm;
