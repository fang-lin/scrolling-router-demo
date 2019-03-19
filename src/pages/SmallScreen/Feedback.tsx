import React from 'react';
import TitleBar from "./TitleBar";
import { PageWrapper, ContextWapper } from './Styles';

const Feedback = () => {
    return (
        <PageWrapper>
            <TitleBar title="Feedback" />
            <ContextWapper>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

</p>
                <p>Declarative views make your code more predictable and easier to debug.</p>
                <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.

</p>
                <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                <p>React can also render on the server using Node and power mobile apps using React Native.</p>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

</p>
                <p>Declarative views make your code more predictable and easier to debug.</p>
                <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.

</p>
                <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                <p>React can also render on the server using Node and power mobile apps using React Native.</p>
            </ContextWapper>
        </PageWrapper>
    );
}

export default Feedback;