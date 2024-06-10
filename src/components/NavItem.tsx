import classNames from 'classnames';

type NavItemProps = React.PropsWithChildren<{
    active?: boolean;
}>

export const NavItem: React.FC<NavItemProps> = ({active = false, children}) => {
    return (
        <a href="/" className={classNames('flex font-bold text-sm justify-between items-center gap-2 py-3 px-4 rounded-full', {'bg-green-primary': active})}>
            {children}
        </a>
    )
}