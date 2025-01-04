import React from "react";

export const ContactInfo = ({
  icon: Icon,
  text,
  link,
}: {
  icon: React.ElementType;
  text: string;
  link?: string;
}) => (
  <div className='flex items-center gap-2 text-sm text-gray-600'>
    <Icon className='h-4 w-4 text-gray-400' />
    {link ? (
      <a href={link} className='truncate transition-colors hover:text-blue-500'>
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

export const InfoLink = ({
  icon: Icon,
  text,
  link,
}: {
  icon: React.ElementType;
  text: string;
  link?: string;
}) =>
  link ? (
    <a
      href={link}
      target='_blank'
      className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600'
    >
      <Icon className='h-4 w-4 text-blue-500' />
      {text}
    </a>
  ) : (
    <span className='flex cursor-not-allowed items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-400'>
      <Icon className='h-4 w-4' />
      {text}
    </span>
  );
