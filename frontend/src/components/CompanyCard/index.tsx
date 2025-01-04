import {
  FiMail,
  FiPhone,
  FiGlobe,
  FiBriefcase,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";

import { InfoLink, ContactInfo } from "@/ui/contact";
import { CompanyInterface } from "@/interfaces/company";

interface CompanyCardProps {
  companies: CompanyInterface[];
}

export default function CompanyCard({ companies }: CompanyCardProps) {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      {companies.map((company) => (
        <div
          key={company.id}
          className='group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg'
        >
          <div className='flex items-start gap-4'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 transition-transform group-hover:scale-110'>
              <span className='text-2xl font-bold text-blue-500'>
                {company.name.charAt(0)}
              </span>
            </div>
            <div className='min-w-0 flex-1'>
              <h3 className='truncate text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600'>
                {company.name}
              </h3>
              <p className='mt-1 flex items-center gap-2 text-sm text-gray-500'>
                <FiMapPin className='h-4 w-4 text-gray-400' />
                {company.address}, {company.city}
              </p>

              <div className='mt-4 space-y-2'>
                {company.email && (
                  <ContactInfo
                    icon={FiMail}
                    text={company.email}
                    link={`mailto:${company.email}`}
                  />
                )}
                {company.phone && (
                  <ContactInfo icon={FiPhone} text={company.phone} />
                )}
              </div>
            </div>
          </div>

          <div className='mt-6 flex flex-wrap gap-2 border-t border-gray-100 pt-6'>
            <InfoLink icon={FiGlobe} text='Website' link={company.website} />
            <InfoLink
              icon={FiBriefcase}
              text='Careers'
              link={company.career_page}
            />
            <InfoLink
              icon={FiLinkedin}
              text='LinkedIn'
              link={company.linkedin}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
