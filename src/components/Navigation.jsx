import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const Navigation = () => {
  const location = useLocation()

  let gramercyIcon = (
    <svg viewBox='0 0 100 100' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='2'>
      <path
        d='M70.973 2.794A40.364 40.364 0 0056.206 0c-12.598 0-24.621 5.731-33.04 15.74C6.638 24.621-2.251 41.682.492 59.305c2.689 17.271 16.482 31.139 34.374 34.613 7.115 4.51 15.249 6.893 23.546 6.893 9.473 0 18.341-3.072 25.652-8.885C98 80.842 103.29 61.881 97.283 44.647c.801-18.583-9.732-35.368-26.31-41.853m-1.33 3.398c12.534 4.904 21.28 16.302 23.487 29.751a45.137 45.137 0 00-3.489-4.862c-15.522-18.836-36.564-20.87-44.892-20.87-2.638 0-5.13.193-7.207.558-1.787.319-3.549.73-5.273 1.237 10.576-8.239 24.944-10.68 37.374-5.814M4.1 58.742C2.027 45.428 7.271 32.448 17.746 23.761a46.727 46.727 0 00-2.19 4.719c-7.945 19.93-5.264 38.506 7.975 55.213a45.511 45.511 0 003.608 4.049c-12.166-5.234-21.026-16.074-23.039-29m39.559 32.369c-2.488 0-4.984-.219-7.417-.65a41.927 41.927 0 01-9.85-9.031c-12.367-15.61-14.871-32.969-7.446-51.599a43.031 43.031 0 016.565-11.201 44.208 44.208 0 0112.669-4.262c1.305-.231 3.503-.508 6.569-.508 7.808 0 27.54 1.905 42.071 19.545a40.402 40.402 0 016.779 11.784 43.234 43.234 0 01-2.756 12.77c-1.791 4.715-12.174 28.445-40.809 32.678a43.52 43.52 0 01-6.372.475h-.003zm38.132-2.047c-6.657 5.297-14.741 8.096-23.379 8.096-4.66 0-9.266-.822-13.642-2.412a48.705 48.705 0 005.802-.494c30.649-4.535 41.769-29.949 43.687-35a47.764 47.764 0 001.548-4.846c1.547 13.182-3.571 26.35-14.016 34.656'
        fill='white'
      />
    </svg>
  )

  let isHome = false
  let isTopics = false
  let isUsers = false

  let homeIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
      />
    </svg>
  )

  let topicsIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
      />
    </svg>
  )

  let usersIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
      />
    </svg>
  )

  switch (location.pathname) {
    case '/':
      isHome = true
      homeIcon = (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
          <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
        </svg>
      )
      break
    case '/topics':
      isTopics = true
      topicsIcon = (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
          <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
          <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
        </svg>
      )
      break
    case '/users':
      isUsers = true
      usersIcon = (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
          <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
        </svg>
      )
      break
    default:
      break
  }

  return (
    <nav>
      <div className='navHeader'>
        {gramercyIcon}

        <div className='navLabel' style={{ lineHeight: 2.2 }}>
          Perma Post
        </div>
      </div>
      <Link to='/'>
        {homeIcon}
        <div className='navLabel' style={{ fontWeight: isHome ? 700 : 400 }}>
          Home
        </div>
      </Link>
      <Link to='/topics'>
        {topicsIcon}
        <div className='navLabel' style={{ fontWeight: isTopics ? 700 : 400 }}>
          Topics
        </div>
      </Link>
      <Link to='/users'>
        {usersIcon}
        <div className='navLabel' style={{ fontWeight: isUsers ? 700 : 400 }}>
          Users
        </div>
      </Link>
    </nav>
  )
}
