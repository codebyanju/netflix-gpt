import { NETFLIX_LOGO } from '@/utils/constants'

const Header = () => {
    return (
        <div className="absolute top-0 left-0 px-8 py-4 bg-gradient-to-b from-black w-full">
            <img
                className="w-44 cursor-pointer"
                src={NETFLIX_LOGO}
                alt="netflix-logo"
                onClick={() =>
                    window.open('https://www.netflix.com/in/', '_blank')
                }
            ></img>
        </div>
    )
}

export default Header
