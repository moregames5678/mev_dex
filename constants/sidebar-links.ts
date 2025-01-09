import { Dashboard, LogOut, MevBots, Network, Support, Wallet } from '@/components/shared/svgr';


export const sidebarLinks = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: Dashboard,
    },
    {
        label: 'Wallet',
        href: '/wallet',
        icon: Wallet,
    },
    {
        label: 'Mev Bots',
        href: '/mev-bots',
        icon: MevBots,
    },
    {
        label: 'Network',
        href: '/network',
        icon: Network,
    },
    {
        label: 'Support',
        href: '/support',
        icon: Support,
    },
    {
        label: 'Log Out',
        href: '/login',
        icon: LogOut,
    },
];

export const dataTitleFromUrl: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/wallet': 'Wallet',
    '/mev-bots': 'MEV Bots',
    '/mev-bots/deploy': 'Deploy',
    '/mev-bots/deploy/mev-rdc': 'MevDexBot',
    '/mev-bots/deploy/custom-rdc': 'Node Bots',
    '/network': 'Network',
    '/support': 'Support',
};

