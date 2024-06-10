import { NavItem } from "./NavItem"

const navs = [
    {
        title: 'Overview',
        iconPath: '/icons/home.png',
        active: false,
    },
    {
        title: 'Patients',
        iconPath: '/icons/group.png',
        activate: true,
    },
    {
        title: 'Schedule',
        iconPath: '/icons/calendar.png',
        activate: false,
    },
    {
        title: 'Message',
        iconPath: '/icons/chat.png',
        activate: false,
    },
    {
        title: 'Transactions',
        iconPath: '/icons/credit_card.png',
        activate: false,
    }
]

export const Navbar = () => {
    return (
        <nav className="bg-white w-full rounded-full py-3 px-8 flex justify-between items-center">
            <a href="/">
                <img src="/TestLogo.png" alt="Tech.Care" className="h-12" />
            </a>
            <div className="flex gap-2">
                {navs.map(nav => (
                    <NavItem key={nav.title} active={nav.activate}>
                        <img src={nav.iconPath} alt={nav.title} className="h-4" />
                        {nav.title}
                    </NavItem>
                ))}
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 border-r-2 pr-3">
                    <img src="/avatar.png" alt="Dr.Jose Simmons" className="rounded-full h-12 w-12" />
                    <div>
                        <p className="font-bold">Dr.Jose Simmons</p>
                        <p>General Practitioner</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    <button className="p-2">
                        <img src="/icons/settings.png" alt="Settings" className="h-5 w-5" />
                    </button>
                    <button className="p-2">
                        <img src="/icons/more.png" alt="More" className="h-5" />
                    </button>
                </div>
            </div>
        </nav>
    )
}