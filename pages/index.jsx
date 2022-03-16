import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';

const items = [
  { icon: 'fab fa-spotify', link: 'https://open.spotify.com/user/315btxfzntnrr2l3mx6rplxl2ctm?si=af04e4436e4d4c65' },
  { icon: 'fab fa-instagram', link: 'https://instagram.com/ajanbaranimo' },
  { icon: 'fab fa-github', link: 'https://github.com/Baran12344' },
  { icon: 'fab fa-discord', link: 'https://discord.com/users/628260878495645726' },
]

export default function Home() {
  const { data: _profile } = swr('https://api.vcodes.xyz/v1/find/user?userId=628260878495645726&featureMode=true');
  const profile = _profile ? _profile.data : null;

  const statuses = {
    dnd: {
      label: 'Do not Disturb'
    },
    idle: {
      label: 'Idle'
    },
    online: {
      label: 'Online'
    },
    offline: {
      label: 'Offline'
    },
  }
  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
        {_profile ? (
          profile ? (
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  Baran Taban
                </p>
                {profile.presence.status !== "offline" && (
                  <Tippy content={`${statuses[profile.presence.status].label} on Discord`} animation="shift-away" arrow={false}>
                    <span className={`ml-2 text-${profile.presence.status} px-2 py-1 font-normal rounded-md text-sm`}>
                          <i className={`fa fa-circle text-${profile.presence.status} mr-2`} />{statuses[profile.presence.status].label}
                    </span>
                  </Tippy>
                )}
                </div>
                <p className="text-white/50 text-md mt-3">
                Merhaba ben baran, 17 yaşındayım 11. sınıf öğrencisiyim inşaat bölümündeyim. Boş zamanlarımın çoğunu discord sunucumuz ve Hydra.M müzik botumuzla ilgilenmekle geçiriyorum bana ceşitli iletişim adreslerimden ulaşabilirsiniz
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-${profile.presence.status} `}>
                <img alt="clqu" src={`https://cdn.discordapp.com/avatars/${profile.profile.id}/${profile.profile.avatar}`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
                <div className={`bg-[#040404] rounded-full px-[4px] py-[1px] flex items-center absolute bottom-0 right-4`}>
                  <Tippy content={statuses[profile.presence.status].label} animation="shift-away" arrow={false}>
                    <i className={`fad fa-circle text-2xl text-${profile.presence.status}`} />
                  </Tippy>
                </div>
              </div>
              
            </div>
            <br></br>
            <span style={{ zIndex: '-1' }} className="text-white/5 absolute bottom-3 left-7 text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">Discord Bot Developer</span>
          </div>
          
          ) : (
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="bg-neutral-700/30 animate-pulse w-1/2 h-[24px] rounded-md" />
                <div className="mt-2 bg-neutral-700 animate-pulse w-[95%] h-[96px] rounded-md" />
              </div>
              <div className="order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full">
                <div className="bg-neutral-700/30 animate-pulse w-[160px] h-[160px] rounded-full" />
                <div className="absolute bottom-1 right-5 bg-neutral-700 border-4 border-neutral-800 animate-pulse w-[32px] h-[32px] rounded-full" />
              </div>
            </div>
          )
        ) : (
          <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
            <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
              <div className="bg-neutral-700/30 animate-pulse w-1/2 h-[24px] rounded-md" />
              <div className="mt-2 bg-neutral-700/30 animate-pulse w-[95%] h-[96px] rounded-md" />
            </div>
            <div className="order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full">
              <div className="bg-neutral-700/30 animate-pulse w-[160px] h-[160px] rounded-full" />
              <div className="absolute bottom-1 right-5 bg-neutral-700 border-4 border-neutral-800 animate-pulse w-[32px] h-[32px] rounded-full" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
