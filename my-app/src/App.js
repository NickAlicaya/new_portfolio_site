import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/Main'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>NICK ALICAYA / </span><strong>Software Engineer</strong></span>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
        <Main/>
        </Content>
        
    </Layout>
</div>
  );
}

export default App;
