import { ShoppingCartOutlined, Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './TrangCaNhanChiTiet.scss'
import { lichSu } from '../../data/lichSu'
import { useState } from 'react'
function doiSangPhanNghin(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
const TrangCaNhanChiTiet = () => {
    const [nutShowLichSu, setNutShowLichSu] = useState(true)
    const [soLichSuShow, setSoLichSuShow] = useState(4)
    const showMoreLichSu = () => {
        if (soLichSuShow < lichSu.length) {
            setSoLichSuShow(soLichSuShow + 4)
            if (soLichSuShow + 4 >= lichSu.length) {
                setNutShowLichSu(false)
            }
        }
    }
    return (
        <div className="TrangCaNhanChiTiet">
            <div className="TrangCaNhanChiTiet__trai">
                <div className="TrangCaNhanChiTiet__trai__tren">
                    <div className="TrangCaNhanChiTiet__trai__tren__anh">
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                </div>
                <div className="TrangCaNhanChiTiet__trai__duoi">
                    <div className="TrangCaNhanChiTiet__trai__duoi__item">
                        <h1>Họ và tên:</h1>
                        <input type="text" value={"Nguyễn Thế Điệp"} />
                    </div>
                    <div className="TrangCaNhanChiTiet__trai__duoi__item">
                        <h1>Email:</h1>
                        <input type="text" value={"thediep094@gmail.com"} />
                    </div>
                    <div className="TrangCaNhanChiTiet__trai__duoi__item">
                        <h1>Số điện thoại:</h1>
                        <input type="text" value={"0922338229"} />
                    </div>
                    <div className="TrangCaNhanChiTiet__trai__duoi__item">
                        <h1>Địa chỉ:</h1>
                        <input type="text" value={"Kiến Hưng, Hà Đông, Hà Nội"} />
                    </div>

                </div>
                <div className="TrangCaNhanChiTiet__button">
                    <button id='TrangCaNhanChiTiet__button'>Cập nhật</button>
                </div>
            </div>
            <div className="TrangCaNhanChiTiet__phai">
                <div className="TrangCaNhanChiTiet__phai__danhsach">
                    <div className="TrangCaNhanChiTiet__phai__danhsach__title">
                        <h1>Lịch Sử Mua Hàng</h1>
                    </div>
                    <div className="TrangCaNhanChiTiet__phai__danhsach__items">
                        {
                            lichSu.map((item, index) => {
                                return (
                                    index < soLichSuShow ?
                                        <div className="TrangCaNhanChiTiet__phai__danhsach__item" key={index}>
                                            <Link to={`/chitiet`} className="TrangCaNhanChiTiet__phai__danhsach__item__link">
                                                <div className="TrangCaNhanChiTiet__phai__danhsach__item__hinhanh">
                                                    <img src={item.imgUrl} alt="" />
                                                </div>
                                            </Link>
                                            <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin">
                                                <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin__tren">
                                                    <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin__title">
                                                        <Link to={`/chitiet`} className="TrangCaNhanChiTiet__phai__danhsach__item__link">
                                                            <h1>{item.name}</h1>
                                                        </Link>
                                                        <div className="TrangCaNhanChiTiet__phai__danhsach__item__theloai">
                                                            <p>{`${item.tags[0]},${item.tags[1]},${item.tags[2]}`}</p>
                                                        </div>
                                                    </div>
                                                    <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin__phai">

                                                        <p>Ngày mua: {item.ngayMua}</p>

                                                    </div>
                                                </div>
                                                <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin__desc">
                                                    <p>{item.desc}</p>
                                                </div>
                                                <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin__gia">
                                                    <p>{doiSangPhanNghin(item.price)} VNĐ</p>
                                                    <h1>Số lượng mua: {item.soLuong}</h1>
                                                </div>
                                                <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin__duoi">
                                                    <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin__duoi__trai">
                                                        <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin__duoi__trai__tacgia">
                                                            <h1>Tác giả</h1>
                                                            <p>{item.author}</p>
                                                        </div>
                                                        <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin__duoi__trai__nam">
                                                            <h1>Năm</h1>
                                                            <p>{item.namXuatBan}</p>
                                                        </div>
                                                    </div>
                                                    <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin__duoi__phai">
                                                        <div className="TrangCaNhanChiTiet__phai__danhsach__item__thongtin__duoi__phai__nut">
                                                            <ShoppingCartOutlined className='TrangCaNhanChiTiet__phai__danhsach__item__thongtin__duoi__phai__nut__icon' />
                                                            <p>Tổng số tiền: {doiSangPhanNghin(item.price * item.soLuong)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : null
                                )
                            })
                        }
                    </div>
                    {nutShowLichSu ?
                        <div className="TrangCaNhanChiTiet__phai__danhsach__showMoreComment" onClick={showMoreLichSu}>
                            <h3>Xem thêm lịch sử</h3>
                        </div> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default TrangCaNhanChiTiet