import { Breadcrumbs, Pagination, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './TheLoaiSach.scss'
import { ArrowForward, ShoppingCartOutlined, Star } from '@mui/icons-material'
import { timKiem } from '../../data/timKiem'
import axios from 'axios'
function doiSangPhanNghin(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
export const TheLoaiSach = () => {
    const [sapXepTheoKieu, setSapXepTheoKieu] = useState('')
    const doiSapXep = (event) => {
        setSapXepTheoKieu(event.target.value);
    }

    const [trang, setTrang] = useState({
        trangHienTai: 1,
        soItemMotTrang: 4,
        tongSoItem: timKiem.length
    })

    const doiTrang = (e, value) => {
        setTrang({
            ...trang,
            trangHienTai: value
        })
    }

    const [data, setData] = useState([]);
    const getApi = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/sachs/');
            console.log(res.data)
            setData(res.data.data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getApi();

    }, [])


    return (
        <div className="TheLoaiSach">
            <div className="TheLoaiSach__tren">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" to="/" className='TheLoaiSach__tren__link'>
                        Trang chủ
                    </Link>
                    <Typography color="text.primary">Thể loại</Typography>
                </Breadcrumbs>
            </div>
            <div className="TheLoaiSach__duoi">
                <div className="TheLoaiSach__duoi__luachon">
                    <div className="TheLoaiSach__duoi__luachon__title">
                        Lựa Chọn
                    </div>
                    <div className="TheLoaiSach__duoi__luachon__sapxep">
                        <div className="TheLoaiSach__duoi__luachon__sapxep__title">
                            <h1>Chọn kiểu sắp xếp</h1>
                        </div>
                        <div className="TheLoaiSach__duoi__luachon__sapxep__kieu">
                            <FormControl className='TheLoaiSach__duoi__luachon__sapxep__kieu__form'>
                                <InputLabel id="TheLoaiSach__duoi__luachon__sapxep__kieu__ten">Sắp xếp</InputLabel>
                                <Select
                                    id="TheLoaiSach__duoi__luachon__sapxep__kieu__luachon"
                                    value={sapXepTheoKieu}
                                    onChange={doiSapXep}
                                >
                                    <MenuItem value="moinhat">Mới Nhất</MenuItem>
                                    <MenuItem value="banchay">Bán Chạy Nhất</MenuItem>
                                    <MenuItem value="binhluan">Nhiều Bình Luận Nhất</MenuItem>
                                    <MenuItem value="danhgia">Đánh Giá Cao</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="TheLoaiSach__duoi__luachon__nam">
                        <div className="TheLoaiSach__duoi__luachon__nam__title">

                            <h1>Chọn năm</h1>
                        </div>
                        <div className="TheLoaiSach__duoi__luachon__nam__nambatdau">
                            <h1>Năm bắt đầu</h1>
                            <input type="text" placeholder='Năm bắt đầu' />
                        </div>
                        <div className="TheLoaiSach__duoi__luachon__nam__namketthuc">
                            <h1>Năm kết thúc</h1>
                            <input type="text" placeholder='Năm kết thúc' />
                        </div>
                    </div>
                    <div className="TheLoaiSach__duoi__luachon__theloai">
                        <div className="TheLoaiSach__duoi__luachon__theloai__title">
                            <h1>Chọn thể loại</h1>
                        </div>
                        <div className="TheLoaiSach__duoi__luachon__theloai__luachon">
                            <div className="TheLoaiSach__duoi__luachon__theloai__luachon__item">
                                <input type="checkbox" id="TheLoaiSach__duoi__luachon__theloai__luachon__item__checkbox" />
                                <h1>Action</h1>
                            </div>
                            <div className="TheLoaiSach__duoi__luachon__theloai__luachon__item">
                                <input type="checkbox" id="TheLoaiSach__duoi__luachon__theloai__luachon__item__checkbox" />
                                <h1>Advanture</h1>
                            </div>
                            <div className="TheLoaiSach__duoi__luachon__theloai__luachon__item">
                                <input type="checkbox" id="TheLoaiSach__duoi__luachon__theloai__luachon__item__checkbox" />
                                <h1>Comedy</h1>
                            </div>
                            <div className="TheLoaiSach__duoi__luachon__theloai__luachon__item">
                                <input type="checkbox" id="TheLoaiSach__duoi__luachon__theloai__luachon__item__checkbox" />
                                <h1>Crime</h1>
                            </div>
                            <div className="TheLoaiSach__duoi__luachon__theloai__luachon__item">
                                <input type="checkbox" id="TheLoaiSach__duoi__luachon__theloai__luachon__item__checkbox" />
                                <h1>Drama</h1>
                            </div>
                            <div className="TheLoaiSach__duoi__luachon__theloai__luachon__item">
                                <input type="checkbox" id="TheLoaiSach__duoi__luachon__theloai__luachon__item__checkbox" />
                                <h1>Fantasy</h1>
                            </div>
                            <div className="TheLoaiSach__duoi__luachon__theloai__luachon__item">
                                <input type="checkbox" id="TheLoaiSach__duoi__luachon__theloai__luachon__item__checkbox" />
                                <h1>Horor</h1>
                            </div>
                            <div className="TheLoaiSach__duoi__luachon__theloai__luachon__item">
                                <input type="checkbox" id="TheLoaiSach__duoi__luachon__theloai__luachon__item__checkbox" />
                                <h1>Law</h1>
                            </div>
                            <div className="TheLoaiSach__duoi__luachon__theloai__luachon__item">
                                <input type="checkbox" id="TheLoaiSach__duoi__luachon__theloai__luachon__item__checkbox" />
                                <h1>TV Series</h1>
                            </div>
                            <div className="TheLoaiSach__duoi__luachon__theloai__luachon__item">
                                <input type="checkbox" id="TheLoaiSach__duoi__luachon__theloai__luachon__item__checkbox" />
                                <h1>Romance</h1>
                            </div>
                        </div>
                    </div>
                    <div className="TheLoaiSach__duoi__luachon__gia">
                        <div className="TheLoaiSach__duoi__luachon__gia__title">

                            <h1>Chọn giá</h1>
                        </div>
                        <div className="TheLoaiSach__duoi__luachon__gia__tu__den">
                            <h1>Từ</h1>
                            <input type="text" placeholder='VNĐ' className='TheLoaiSach__duoi__luachon__gia__tu__den__input' />
                            <ArrowForward className='TheLoaiSach__duoi__luachon__gia__tu__den__icon' />
                            <h1>Đến</h1>
                            <input type="text" placeholder='VNĐ' className='TheLoaiSach__duoi__luachon__gia__tu__den__input' />
                        </div>
                    </div>
                    <div className="TheLoaiSach__duoi__luachon__timkiem">
                        <div className="TheLoaiSach__duoi__luachon__timkiem__timkiem">
                            Tìm Kiếm
                        </div>
                        <div className="TheLoaiSach__duoi__luachon__timkiem__reset">
                            Reset Tìm Kiếm
                        </div>
                    </div>
                </div>
                <div className="TheLoaiSach__duoi__danhsach">
                    <div className="TheLoaiSach__duoi__danhsach__title">
                        <h1>Danh Sách Sách</h1>
                    </div>
                    <div className="TheLoaiSach__duoi__danhsach__items">
                        {
                            data.map((item, index) => {
                                return (
                                    (index >= (trang.trangHienTai - 1) * trang.soItemMotTrang) && (index < trang.trangHienTai * trang.soItemMotTrang) ?
                                        <div className="TheLoaiSach__duoi__danhsach__item" key={index}>
                                            <Link to={`/chitiet`} className="TheLoaiSach__duoi__danhsach__item__link">
                                                <div className="TheLoaiSach__duoi__danhsach__item__hinhanh">
                                                    <img src={`http://localhost:5000/images/sachs/${item?.imgUrl}`} alt="" />
                                                </div>
                                            </Link>
                                            <div className="TheLoaiSach__duoi__danhsach__item__thongtin">
                                                <div className="TheLoaiSach__duoi__danhsach__item__thongtin__tren">
                                                    <div className="TheLoaiSach__duoi__danhsach__item__thongtin__title">
                                                        <Link to={`/chitiet`} className="TheLoaiSach__duoi__danhsach__item__link">
                                                            <h1>{item?.tenSach}</h1>
                                                        </Link>
                                                        <div className="TheLoaiSach__duoi__danhsach__item__theloai">
                                                            <p>{`${item?.theLoai[0] ? item.theLoai[0] : ''},${item?.theLoai[1] ? item.theLoai[1] : ''},${item.theLoai[2] ? item.theLoai[2] : ''}`}</p>
                                                        </div>
                                                    </div>
                                                    <div className="TheLoaiSach__duoi__danhsach__item__thongtin__phai">
                                                        <div className="TheLoaiSach__duoi__danhsach__item__danhgia">
                                                            {
                                                                [1, 2, 3, 4, 5].map((item1, index) => {
                                                                    return (
                                                                        <Star className={item1 <= 5 ? "TheLoaiSach__duoi__danhsach__item__danhgia__sao active" : "TheLoaiSach__duoi__danhsach__item__danhgia__sao"} key={index} />
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <p>{item.luotMua} lượt mua</p>

                                                    </div>
                                                </div>
                                                <div className="TheLoaiSach__duoi__danhsach__item__thongtin__desc">
                                                    <p>{item.mieuTa}</p>
                                                </div>
                                                <div className="TheLoaiSach__duoi__danhsach__item__thongtin__gia">
                                                    <p>{doiSangPhanNghin(item.gia)} VNĐ</p>
                                                </div>
                                                <div className="TheLoaiSach__duoi__danhsach__item__thongtin__duoi">
                                                    <div className="TheLoaiSach__duoi__danhsach__item__thongtin__duoi__trai">
                                                        <div className="TheLoaiSach__duoi__danhsach__item__thongtin__duoi__trai__tacgia">
                                                            <h1>Tác giả</h1>
                                                            <p>{item.tacGia}</p>
                                                        </div>
                                                        <div className="TheLoaiSach__duoi__danhsach__item__thongtin__duoi__trai__nam">
                                                            <h1>Năm</h1>
                                                            <p>{item.namXuatBan}</p>
                                                        </div>
                                                    </div>
                                                    <div className="TheLoaiSach__duoi__danhsach__item__thongtin__duoi__phai">
                                                        <div className="TheLoaiSach__duoi__danhsach__item__thongtin__duoi__phai__nut">
                                                            <ShoppingCartOutlined className='TheLoaiSach__duoi__danhsach__item__thongtin__duoi__phai__nut__icon' />
                                                            <p>Thêm vào giỏ</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null
                                )
                            })
                        }
                    </div>
                    <div className="TheLoaiSach__duoi__danhsach__chuyentrang">
                        <Pagination count={Math.ceil(trang.tongSoItem / trang.soItemMotTrang)} variant="outlined" page={trang.trangHienTai} onChange={doiTrang} color="primary" />
                    </div>
                </div>
            </div>

        </div>
    )
}
