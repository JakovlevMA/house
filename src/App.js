import React from 'react'
import Header from "./components/Header";
import './styles/App.css'
import Presentation from "./components/Presentation";
import NavigationsProduct from "./components/NavigationsProduct";
import Products from "./components/Products";


function App() {
    let items = [
        {
            id: 1,
            img: 'https://s3-alpha-sig.figma.com/img/fa91/bf9e/3004b7d8a3c0e2de1caa8fd5732848be?Expires=1694390400&Signature=lJCMX-qy9pWmWXnQOIurQyF8lSuCnQxqeRnRIqZi5oNv9rB7mAyRVm4JAVbXXCV3iH7mavtHII0O66UGYM7rvN~GgEMUdbGV6wsAr8jzJN6MgtmMviB~WOWdcqvlUBm~lJTf72ZhUIM-2SJTX~mHjrD8mKVS7wjvehIPqkcnoMf968r7QNuWKUmWWnDHiE6cqjkfv8b3YAN6pweK7reTDJdIkcLwMsu-ZbmGAsTAPsgPfEXbNTlJaTdeV6g-MhobHA3ycL7f9Va7~XrQRCKm1k4n3TTaJd4lirDbl-iRrLhwaE2JE4APToFF1ivnLEicH4EbnnCrYvP1yn00XZ-uzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Марсель Руссо',
            title: 'Охота Амура',
            description: 'Холст, масло (50х80)',
            price: '14 500 руб'
        },
        {
            id: 2,
            img: 'https://s3-alpha-sig.figma.com/img/15e2/7662/749f524a689260200e0563fdf7e7d013?Expires=1694390400&Signature=n0EUS~yoJfCU58dNJmAlCO38icQtpobfHouH1bjQDgITDC82iD7qDcWrrA5pumyt99GUDyocyc8EzfrXQfGa4x9H7a3djel3xdZ86XOgll4HQri8wukuLEDmag9wWjqiFFEPcXWU~ORvJD56c1OdnmWUFvh0L3t0FaLzCECDhYk-uBhR8r~vp5zHL13ur~1NsyUYi2Wgf2l2MCyle4X3rXPQEqNs3bOugh3lJ0EKsmGcG4~2KD05hSDn8bHkEWPA6Kta5hXEWXwnOs-aZS1wCMG9bwwvLqe510pFYq6PGOIYZEk7ug9~TNPB50HyocrDvY6Kg8o2~acDUQLFM9-Rtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Анри Селин',
            title: 'Дама с собачкой',
            description: 'Акрил, бумага (50х80)',
            price: '16 500 руб'
        },
        {
            id: 3,
            img: 'https://s3-alpha-sig.figma.com/img/8259/612e/ab708c86c2084b45ede2e5b47f32f0ae?Expires=1694390400&Signature=igCLkxSpkZFJpxAZTs77nU7CuDrqLDvbVnRPVO95fFlzMvuF0QC-jhgd35ZSlhWXcN18m76YQCrS7JToaSPvtWx5twHUFTO3n2nk9CmSXWi5pdzZfUbYUeu-jV63GR6XFNi2xdoxyEs~sLe6EKVHU3feIk9NOcmO7nzw2Gckwzb1ZL7~-u~ejsZENWdxJbm~WE3kVov58z4woPsH9oWd6xxE3qLhKB~wvuZBOers1tLvOo1u5EoTpTN9HuRHl2~ysnZj9abY57dkeg6tkBvJbLsmdRCiHiRthwi-bm5zqwwfoKPDJuuRH7HQigyiU2cTyYEugd3Li4QKxWF0MaLzow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Франсуа Дюпон',
            title: 'Процедура',
            description: 'Цветная литография (40х60)',
            price: '20 000 руб'
        },
        {
            id: 4,
            img: 'https://s3-alpha-sig.figma.com/img/53e8/b467/38c4dea3c32614513f30d586b23e623e?Expires=1694390400&Signature=MIPCkSuWnpePvJUa~Ip4qxHdrTExZFzzfWn6q2~YZ0R2wJa9kP2sIH~NqAkuNW0YFMEkw~8vcERGPKaur~BX4LszqdXO7jC7Y-Z6smu5DjmiEX8QVUEoXrQF0sFki951CyWP7X60LaB-eEeO-qadoViUNg-nY2z4hEBx9B5tjWpmNMLBa52vd2B5FMJKkYBPA3hT7qwYJd9sjj~~j4-Jjwz3axxbdVJDA4udjzeKsBzl1WZCwRJD6G1N9lZZlt1cVxavZsOihLxZO11YJ8XsBHf74lwy3UO701WPTiUNjBC6E9ENxy6E64LA4Im60Ihl82VypttDl4UADrA8O1ehRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Луи Детуш',
            title: 'Роза',
            description: 'Бумага, акрил (50х80)',
            price: '12 000 руб'
        },
        {
            id: 5,
            img: 'https://s3-alpha-sig.figma.com/img/044c/aca3/2bf109bb1a75d2ec01ef08204231eeaa?Expires=1694390400&Signature=Q5-E43ha1EP693fv8f~zR-3AwYoQRtsUFiyLASYtqPGymxHqCKk~HQ37KLDyvDbZGGUVb7r2jFtDxCRf2yXnB1JlBAtFgasLgBz44ohg4PksEzCyDrHId7EA24ulBLnWZxI3c8nyrIzUUf1sXoEhSeb8lqez3WBDfx22ul3eGo-dZ-rtXe0gbrhzJ69vwJkoru3TrpWJcG9KTXamuVmXMGrtE7pPh7Gk-OInchRT-LyvX4pk6yBuKI9unQkke9g666E1x-At9OT9ng0mgEmTbMZM00VhIR8yHesMjE0b4F7I5pp2j02W~FLroa6o4wyp~X4cVFVdjDkf5Z2kL6jxvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Франсуа Дюпон',
            title: 'Птичья трапеза',
            description: 'Цветная литография (40х60)',
            price: '22 500 руб'
        },
        {
            id: 6,
            img: 'https://s3-alpha-sig.figma.com/img/f32f/888e/e10b4d96d2acd08463a8d8a2887f353f?Expires=1694390400&Signature=DIwPD5zVHlsPpRaad8Hr67taww6IIxV12xAxrF0~66STZuHudIxsq30pzh6Nfm2L1sDZsGI1wr2-r1CNUjDfi9ZBnUlv4t4OAdDh7yHyqcZeKJ2uIty4HoFbuUKPPrVXJ25lngeP6KcG7jNYXwR4czaK~QNWBCP525lI3kWwhZvOP3zkTTVPpNFFNkmrAJmc9P41Gn5g7cA4BGbPCHkjIC8QFlP5bpKOCahh22N4jdiLFbYbqkZENEJr0LtRkJjDz2fSMm47JabkrHm9kCvX3XyuA1h-KADomohVDArx8yASVGamWIgu2Holb3ytcl-Den-A1Jcfoap-nkKIvq5WHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Пьер Моранж',
            title: 'Пейзаж с рыбой',
            description: 'Цветная литография (40х60)',
            price: '20 000 руб'
        }
    ]
  return (
    <div className="App">
        <Header/>
        <Presentation/>
        <NavigationsProduct/>
        <Products items={items}/>
    </div>
  );
}

export default App;
