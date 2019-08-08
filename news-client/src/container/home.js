import React, { Component , Fragment} from 'react'
import Header from '../component/header';
import NewsHome from '../component/news-home';
import Trending from '../component/trending';
import LatestNews from '../component/latest-news';
import EditorChoice from '../component/editor-choice';
import Advertising from '../component/advertising';
import Business from '../component/business';
import LatestInCategory from '../component/latest-in-category';
import StayUpdated from '../component/stay-updated';
import Footer from '../component/footer';
import Copyright from '../component/copyright';
import { BackTop } from 'antd';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <BackTop/>
                <Trending/>
                <NewsHome/>
                <LatestNews/>
                <EditorChoice/>
                <Advertising/>
                <Business/>
                <LatestInCategory/>
                <StayUpdated/>
                <Footer/>
                <Copyright/>
            </Fragment>
        )
    }
}
export default Home 