import React from 'react'
import { Link } from 'react-router-dom'
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

function Filters() {

	return (
		<div className="wrapper-filters" >
			<div className="filters">
				<div className="filters__title">
					Фильтры
                    <Link to="/">
						<span>Скрыть</span>
					</Link>
				</div>
				<div className="filters__price">
					<div className="filters__price-title">Цена, ₽ </div>
					<div className="filters__price-range" id="range-slider">
						<Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect />
					</div>
					<div className="filters__price-inputs">
						<span>от</span><input type="number" min="36 000" max="38 000" placeholder="36 000"
							className="filters__price-input" id="input-0" />
						<span>до</span><input type="number" min="36 000" max="38 000" placeholder="38 000"
							className="filters__price-input" id="input-1" />
					</div>
				</div>
				<div className="filetrs__distance">
					<div className="filetrs__distance-text">
						Расстояние до центра города
                </div>
					<div className="filters__distance-select">
						<select name="" id="" className="select">
							<option value="1">Меньше 1 км</option>
							<option value="2">Меньше 2 км</option>
							<option value="3">Меньше 5 км</option>
							<option value="4">Меньше 10 км</option>
						</select>
					</div>
				</div>
				<div className="filters__housing">
					<div className="filters__housing-title">Тип жилья</div>
					<div className="filters__housing-checkbox">
						<div className="checkbox">
							<input className="checkbox__input" type="checkbox" id="checkbox_1" />
							<label className="checkbox__label" htmlFor="checkbox_1">Отель</label>
						</div>
						<div className="checkbox">
							<input className="checkbox__input" type="checkbox" id="checkbox_2" />
							<label className="checkbox__label" htmlFor="checkbox_2">Апартаменты</label>
						</div>
						<div className="checkbox">
							<input className="checkbox__input" type="checkbox" id="checkbox_3" />
							<label className="checkbox__label" htmlFor="checkbox_3">Хостел</label>
						</div>
					</div>
				</div>
				<div className="filters__money">
					<div className="filters__money-title">
						Отображаемая валюта
                </div>
					<div className="filters__money-radio">
						<div className="radio">
							<input className="radio__input" name="male" type="radio" id="radio_2" />
							<label className="radio__label" htmlFor="radio_2">Рубли</label>
						</div>

						<div className="radio">
							<input className="radio__input" name="male" type="radio" id="radio_3" />
							<label className="radio__label" htmlFor="radio_3">Доллары США</label>
						</div>

						<div className="radio">
							<input className="radio__input" name="male" type="radio" id="radio_4" />
							<label className="radio__label" htmlFor="radio_4">Евро</label>
						</div>
					</div>
				</div>
				<button className="filters__btn">Применить</button>
			</div>
		</div>
	)
}

export default Filters
