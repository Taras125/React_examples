function Car(props) {
  const classes = ['card']
  if (props.car.marked) {
    classes.push('marked')
  }
  return (
    <div className={classes.join(' ')} onClick={props.onClickMark}>
      <div className='card-img'>
        <img
          src={props.car.img}
          alt={props.car.name} />
      </div>
      <h3>{props.car.name}</h3>
      <p>{props.car.price} $</p>
    </div>
  )
}

class App extends React.Component {
  state = {
    cars: [
      { marked: false, name: 'BMW M2', price: 20000, img: 'https://pictures.topspeed.com/IMG/crop/201911/bmw-m2-cs-picture-ga-3_800x0w.jpg' },
      { marked: false, name: 'Mercedes-AMG GT', price: 30000, img: 'https://wroom.ru/i/cars2/mercedesbenz_amggt_1.jpg' },
      { marked: false, name: 'Porsche Panamera', price: 50000, img: 'https://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX164/bf3dbda8-da19-40ff-bdea-69fe28470531.JPG' },
      { marked: false, name: 'Lamborghini SC18 ', price: 70000, img: 'https://img.drive.ru/i/0/5bf27096ec05c40a42000003.jpg' }
    ],
    visible: true,
    appTitle: 'Cars pictures'
  }

  clickVisible() {
    this.setState({ visible: !this.state.visible })
  }

  clickMarked(name) {
    const cars = this.state.cars.concat()
    const car = cars.find(c => c.name === name)
    car.marked = !car.marked
    this.setState({ cars })
  }

  renderCar() {
    if (!this.state.visible) {
      return null
    }
    return this.state.cars.map(car => {
      return (
        <Car
          car={car}
          key={car.name + Math.random()}
          onClickMark={this.clickMarked.bind(this, car.name)}
        />
      )
    })
  }

  titleChange(title) {
    if (title.trim() === '') {
      return
    }
    this.setState({
      appTitle: title
    })
  }

  render() {
    const style = {
      marginRight: 20
    }
    return (
      <div className="app">
        <h1>{this.state.appTitle}</h1>
        <button
          onClick={() => this.clickVisible()}
          style={style}
        >Enter</button>
        <input
          type='text'
          placeholder='Change title'
          onChange={(e) => this.titleChange(e.target.value)}
          value={this.state.appTitle}
        />
        <hr />
        <div className="list">
          {this.renderCar()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));