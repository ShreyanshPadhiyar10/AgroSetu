import React from 'react'
import InfoCard from './InfoCard';

const files = [
  {
    title: "Business Registration",
    description: "Upload your farm business registration certificate",
    iconClass: "fa-solid fa-building",
    required: true,
  },
  {
    title: "ID Verification",
    description: "Upload a government-issued ID",
    iconClass: "fa-solid fa-address-card",
    required: true,
  },
  {
    title: "Certification (Optional)",
    description: "Upload organic or other farming certifications",
    iconClass: "fa-solid fa-certificate",
    required: false,
  },
];

function FileUploader() {
  return (
    <>
      {
        files.map((file) => (
          <InfoCard 
            key={file.title}
            title={file.title}
            description={file.description}
            iconClass={file.iconClass}
          />
        ))
      }
    </>
  )
}

export default FileUploader
