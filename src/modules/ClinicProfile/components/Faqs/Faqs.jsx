'use client';

import React from 'react'
import { useParams } from 'next/navigation';

import { Accordion } from '@/modules/Common/components/Accordion'

import './Faqs.scss';

const FAQS_COUNT_THRESHOLD = 5;

function Faqs({
  title,
  itemsCount,
  items = []
}) {

  const { city, slug } = useParams();

  return (
    <div className="establishment-profile-faqs">
      <h2 className="establishment-profile-faqs__title">{title}</h2>
      {items.map(({ id, title, replies }) => (
        <Accordion key={id} id={id}>
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{replies[0]?.text}</Accordion.Body>
        </Accordion>
      ))}
      { itemsCount > FAQS_COUNT_THRESHOLD ? <a className='establishment-profile-faqs__cta' 
        href={`/${city}/clinic/${slug}/faq`}>Read All Questions</a> : null }
    </div>
  );
}

export default Faqs