import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
const users=[
    {
        userName:'midudev',
        name:'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName:'elonmusk',
        name:'Elon Musk',
        isFollowing: false
    },
    {
        userName:'JackDeLaConcha',
        name:'Jack De La Concha',
        isFollowing: true
    },
    {
        userName:'GuillermoAndres',
        name:'Guillermo Andrés',
        isFollowing: false
    }
]
export function App() {
    const midudev={isFollowing: true, userName: 'midudev'}
    const elonmusk={isFollowing: false, userName: 'elonmusk', initialIsFollowing: true}
    const jack={isFollowing: true, userName: 'JackDeLaConcha', initialIsFollowing: true}
    return (
        <section className="App">
            {
                users.map(({isFollowing, userName, name}) =>(
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                   
                ))
            }
        </section>
    )
}