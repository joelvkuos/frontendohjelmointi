export default function App() {
    return (
        <>
            <Greeting firstName="Joel" />
        </>
    )
}

type GreetingProps = {
    firstName: string;
}

function Greeting({ firstName }: GreetingProps) {
    return (
        <h4>Hello {firstName}</h4>
    )
}