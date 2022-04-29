import './DacBiet.scss'
import { dacBiet } from '../../data/dacBiet'
import { ArrowBackOutlined, ArrowForwardOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const DacBiet = () => {
    const [dacBietSlide, setDacBietSlide] = useState(0)
    const nutTienDacBietSlide = () => {
        if (dacBietSlide < dacBiet.length - 3) {
            setDacBietSlide(dacBietSlide + 1)
        }
    }
    const nutLuiDacBetSlide = () => {
        if (dacBietSlide > 0) {
            setDacBietSlide(dacBietSlide - 1)
        }
    }
    return (
        <div className="DacBiet">
            <div className="DacBiet__title">
                <h3>Sách Đặc Biệt - Bản Giới Hạn</h3>
                <p>Một trong những yếu tố làm nên sự đặc biệt của các phiên bản này là chúng thường được làm với số lượng ít. Bởi vậy, chúng còn được gọi là sách phiên bản giới hạn</p>
            </div>
            <div className="DacBiet__items">
                {
                    dacBiet.map((item, index) => {
                        return (
                            <div className={(Math.abs(index - dacBietSlide) < 3 && index >= dacBietSlide) ? "DacBiet__item active" : "DacBiet__item"} key={index}>
                                <Link to="/chitiet">
                                    <div className="DacBiet__item__img">
                                        <img src={item.imgUrl} alt="" />
                                    </div>
                                </Link>
                                <div className="DacBiet__item__thongtin">
                                    <Link to="/chitiet" style={{
                                        textDecoration: 'none',
                                    }}>
                                        <h4>{item.name}</h4>
                                    </Link>
                                    <Link to="/theloai" style={{
                                        textDecoration: 'none',
                                    }}>
                                        <div className="DacBiet__item__thongtin__tags">
                                            <h1>{item.tags[0]}</h1>
                                            <h1>{item.tags[1]}</h1>
                                            <h1>{item.tags[2]}</h1>
                                        </div>
                                    </Link>
                                    <div className="DacBiet__item__thongtin__desc">
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="DacBiet__item__thongtin__tacgia">
                                        <h4>{item.author}</h4>
                                    </div>
                                    <div className="DacBiet__item__thongtin__duoi">
                                        <div className="DacBiet__item__thongtin__duoi__nut">
                                            <ShoppingCartOutlined className='DacBiet__item__thongtin__duoi__nut--icon' />
                                            <h1>Thêm vào giỏ</h1>
                                        </div>
                                        <div className="DacBiet__item__thongtin__duoi__gia">
                                            <h1>{item.price} VNĐ</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="DacBiet__nut">
                <ArrowBackOutlined className='DacBiet__nut__icon' onClick={nutLuiDacBetSlide} />
                <ArrowForwardOutlined className='DacBiet__nut__icon' onClick={nutTienDacBietSlide} />
            </div>
        </div>
    )
}

export default DacBiet