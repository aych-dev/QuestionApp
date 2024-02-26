import React, { ReactNode } from 'react';
import TicketCard from './components/TicketCard';
import { CategoryTypes } from './components/TicketCard';

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', {
      cache: 'no-store',
    });

    return res.json();
  } catch (error) {
    console.log('failed to get tickets', error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories: string[] = [
    ...new Set(tickets?.map(({ category }: any) => category) as string[]),
  ];

  return (
    <div className='p-5'>
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => {
            return (
              <div key={categoryIndex} className='mb-4'>
                <h2>{uniqueCategory}</h2>
                <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
                  {tickets
                    .filter(
                      (ticket: CategoryTypes) =>
                        ticket.category === uniqueCategory
                    )
                    .map((filteredTicket: CategoryTypes, _index: number) => {
                      return (
                        <TicketCard
                          id={_index}
                          key={_index}
                          ticket={filteredTicket}
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
