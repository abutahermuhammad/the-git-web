// Core Imports
// UI Imports
import NavigationPrimary from './NavigationPrimary'
import NavigationSecondery from './NavigationSecondery'


// Secondery navigation data.
const networks = [
    {
        _id: "NT001",
        title: "Resources",
        uri: "/resources"
    },
    {
        _id: "NT002",
        title: "Forum",
        uri: "/forum"
    },
    {
        _id: "NT003",
        title: "Video",
        uri: "/video"
    },
    {
        _id: "NT004",
        title: "Gist paper",
        uri: "/gist-paper"
    },
    {
        _id: "NT005",
        title: "Gist Chart",
        uri: "/gist-chart"
    },
    {
        _id: "NT006",
        title: "Research",
        uri: "/research"
    },
    {
        _id: "NT007",
        title: "Events",
        uri: "/events"
    },
    {
        _id: "NT008",
        title: "Learning hub",
        uri: "/learning-hub"
    },
    {
        _id: "NT009",
        title: "Donation",
        uri: "/donation"
    },
    {
        _id: "NT0010",
        title: "Team",
        uri: "/team"
    },
    {
        _id: "NT0011",
        title: "Contributors",
        uri: "/contributors"
    },
]

const Navigation = () => {
    return (
        <>
            <header>
                <NavigationPrimary data={networks} />
                {/* <NavigationSecondery data={networks} /> */}
            </header>
        </>
    )
}

export default Navigation
