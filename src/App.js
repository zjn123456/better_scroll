import React,{ Component} from 'react'
import {withRouter} from 'react-router-dom'
import bscroll from 'better-scroll';
import data from './data.js'

import './App.css'
console.log(data)
// import Opretion from '../TaskCmp/Opretion'
// import Pattern from '../TaskCmp/Pattern'
// import Target from '../TaskCmp/Target'
// import TaskAttr from '../TaskCmp/TaskAttr'


class Menu extends React.Component {
    constructor() {
        super(),
        this.state = {
            datas:data,
            products: [],
            active_index:0,
        }
        this.scroll = this.scroll.bind(this);
        this.click = this.click.bind(this);
        this.list = this.list.bind(this);
        this.leftscroll = this.leftscroll.bind(this);
        this.currentIndex = this.currentIndex.bind(this);
        this.listIndex = 0;
    }

    leftscroll(node) {
        // 左侧滚动
        if (node) {
            this.newlSroll = new bscroll(node, {
                probeType: 3,
                scrollY: true,
                click: true,
            })
            this.newlSroll.refresh();
        }
    }

    scroll() {
        // 右侧滚动
            const that = this;
            this.newScroll = new bscroll(this.refs.foodFather, {
                probeType: 3,
                scrollY: true,
                click: true
            })
            this.newScroll.refresh();
            this.newScroll.on('scroll', (obj) => {
                that.currentIndex(obj);
            })

    }

    currentIndex(obj) {
        let objY = Math.abs(Math.floor(obj.y));
        let index = 0;
        index = this.heightArr.findIndex(item => item > objY)
        index = index === -1 ? this.heightArr.length : index;
        if (this.listIndex !== index - 1) {
            this.scrollList(index - 1)
        }
    }

    click(e, index) {
        // 点击侧边栏右侧菜单滚动
        this.scrollList(index);
        console.log(this.refs.foodFather)
        const dataList = this.refs.foodFather.children[0].children;
        this.newScroll.scrollToElement(dataList[index], 300, true, false)
    }

    componentDidMount() {
                   console.log(this.state.datas)
                    this.heightArr = [];
                    console.log(this.refs.foodFather)
                    const dataList = this.refs.foodFather.children[0].children;
                    [].slice.call(dataList).forEach((item) => {
                        this.heightArr.push(item.offsetTop - 10)
                    })
                   this.scroll();
        
    }

    scrollList(key) {
        // console.log(key)
        //  点击侧边栏改变样式
        for (let i = 0; i < this.foodList.length; i++) {
           // this.foodList[i].style.background = '#F4F4F4';
        }
        // this.foodList[key].style.background = '#fff';
         this.listIndex = key;
         console.log(this.listIndex)
    }

    list(node) {
        if (node) {
            this.foodList = node.children;
            console.log(this.foodList)
        }
    }

    render() {
        const { data } = this.state.datas;
         console.log(this.state.datas)
        return (
            <div className='Shop'>
            <header className='header'>tou</header>
            <div className="main">
                <div className="leftWrap" ref={this.leftscroll}>
                    <ul className="left" ref={(node) => this.list(node)}>
                        {
                            this.state.datas && this.state.datas.map((item, index) => {
                                return (
                                    <li key={index} style={{ background: index === 0 ? '#fff' : '#F4F4F4' }} onClick={
                                        (e) => { this.click(e, index) }
                                    }>
                                        {item.prod}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div ref={"foodFather"} className="rightWrap">
                    <div className="right">
                        {
                            this.state.datas && this.state.datas.map((item, index) => {
                                return (
                                    <div className="title" key={index}>
                                    <h4>{item.taskname}</h4>
                                    {
                                        item.choose.map((value, key) => {
                                            return (
                                                <div key={key}>
                                                    <h5>{value}</h5>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div> 
            </div>
        )
    }
}


export default Menu;