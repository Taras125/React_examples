const element = React.createElement

function Car(props) {
    return (
        element('div', { className: 'card' }, [
            element('div', { className: 'card-img', key: 'div' },
                element('img', { src: props.car.img, alt: props.car.name })),
            element('h3', { key: 'h3' }, props.car.name),
            element('p', { key: 'ppp' }, props.car.price)
        ])
    )
}
class App extends React.Component {
    state = {
        cars: [
            { name: 'BMW M2', price: 20000, img: 'https://pictures.topspeed.com/IMG/crop/201911/bmw-m2-cs-picture-ga-3_800x0w.jpg' },
            { name: 'Mercedes-AMG GT', price: 30000, img: 'https://wroom.ru/i/cars2/mercedesbenz_amggt_1.jpg' },
            { name: 'Porsche Panamera', price: 50000, img: 'https://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX164/bf3dbda8-da19-40ff-bdea-69fe28470531.JPG' },
            { name: 'Lamborghini SC18 ', price: 70000, img: 'https://img.drive.ru/i/0/5bf27096ec05c40a42000003.jpg' }
        ]
    }
    renderCar() {
        return this.state.cars.map(car => {
            return element(Car, { car: car, key: car.name + Math.random() })
        })
    }
    render() {
        return element('div', { className: 'app' },
            element('div', { className: 'list' }, this.renderCar())
        )
    }
}
ReactDOM.render(element(App), document.getElementById('root'));