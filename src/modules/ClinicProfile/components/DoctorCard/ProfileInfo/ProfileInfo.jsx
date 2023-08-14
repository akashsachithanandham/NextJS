import Image from 'next/image'
import React from 'react'

import './ProfileInfo.scss';
import IconLikeFilled from '@/modules/Common/components/Icons/IconLikeFilled';
import IconChatFilled from '@/modules/Common/components/Icons/IconChatFilled';

function ProfileInfo({
  name,
  image_url,
  speciality,
  years_of_experience,
  reviews_count,
  recommendation_percent
}) {
  return (
    <div className="profile-info">
      <div className="profile-info__col-left">
        <Image
          src={image_url}
          className="profile-info__photo"
          width={118}
          height={118}
          alt={name}
        />
      </div>
      <div className="profile-info__col-right">
        <div className="profile-info__name">{name}</div>
        <div className="profile-info__speciality">{speciality}</div>
        <div className="profile-info__experience">
          {years_of_experience} years of experience
        </div>
        <div className="profile-info__feedback">
          {recommendation_percent > 0 ? (
            <span className="profile-info__review">
              <IconLikeFilled width={18} height={16} />
              <span>&#160;{recommendation_percent}%</span>
            </span>
          ) : null}
          {reviews_count > 0 ? (
            <span className="profile-info__rating">
              <IconChatFilled width={16} height={16} />
              <span>&#160;{reviews_count} Feedback</span>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo