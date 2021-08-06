import React from 'react'
import Days from './Days'
import moment from 'moment'

export default function Accordion({data}) {
    return (
<div>
    <div className="accordion">

        <div>
            <input type="radio" name="panel" id="panel-1"/>
            <label for="panel-1"><Days/>{Math.round(data.daily[0].temp.day)}°C</label>
            <div className="accordion__content accordion__content--small">
                <h2 className="accordion__header">PLease Let it Be Warm</h2>
                <p className="accordion__body"> Morning {(data.daily[0].temp.morn)} °C DayTime{( data.daily[0].temp.day)}°C*****Evening{(data.daily[0].temp.eve)}°C*****Night{(data.daily[0].temp.night)}°C</p>
            </div>                           
        </div>

        <div>
            <input type="radio" name="panel" id="panel-2"/>
            <label for="panel-2">{(new Date().getDate())+1}<br></br> {Math.round(data.daily[1].temp.day)}°C</label>
            <div className="accordion__content accordion__content--small">
                <h2 className="accordion__header">Just Another Day</h2>
                <p className="accordion__body"> Morning {(data.daily[1].temp.morn)} °C DayTime{( data.daily[1].temp.day)}°C*****Evening{(data.daily[1].temp.eve)}°C*****Night{(data.daily[1].temp.night)}°C</p>
            </div>
        </div>

        <div>
            <input type="radio" name="panel" id="panel-3"/>
            <label for="panel-3">{(new Date().getDate())+2}<br></br>{Math.round(data.daily[2].temp.day)}°C</label>
            <div className="accordion__content accordion__content--small">
                <h2 className="accordion__header">Hope It Doesn't Rain!</h2>
                <p className="accordion__body">Morning {(data.daily[2].temp.morn)} °C DayTime{( data.daily[2].temp.day)}°C*****Evening{(data.daily[2].temp.eve)}°C*****Night{(data.daily[2].temp.night)}°C</p>
            </div>
        </div>

        <div>
            <input type="radio" name="panel" id="panel-4"/>
            <label for="panel-4">{(new Date().getDate())+3}<br></br> {Math.round(data.daily[3].temp.day)}°C</label>
            <div className="accordion__content accordion__content--small">
                <h2 className="accordion__header">Lets Hope It's a Good Day</h2>
                <p className="accordion__body">Morning {(data.daily[3].temp.morn)} °C DayTime {( data.daily[3].temp.day)}°C*****Evening{(data.daily[3].temp.eve)}°C*****Night{(data.daily[3].temp.night)}°C</p>
            </div>
        </div>
        <div>
            <input type="radio" name="panel" id="panel-5"/>
            <label for="panel-5">{(new Date().getDate())+4}<br></br>{Math.round(data.daily[4].temp.day)}°C</label>
            <div className="accordion__content accordion__content--small">
                <h2 className="accordion__header">Don't Forget Your Shades</h2>
                <p className="accordion__body">Morning {(data.daily[4].temp.morn)} °C DayTime{( data.daily[4].temp.day)}°C*****Evening{(data.daily[4].temp.eve)}°C*****Night{(data.daily[4].temp.night)}°C</p>
            </div>
        </div>
        <div>
            <input type="radio" name="panel" id="panel-6"/>
            <label for="panel-6">{(new Date().getDate())+5}<br></br>{Math.round(data.daily[5].temp.day)}°C</label>
            <div className="accordion__content accordion__content--small">
                <h2 className="accordion__header">I Love a Sunny Day!</h2>
                <p className="accordion__body">Morning {(data.daily[5].temp.morn)} °C DayTime{( data.daily[5].temp.day)}°C*****Evening{(data.daily[5].temp.eve)}°C*****Night{(data.daily[5].temp.night)}°C</p>
            </div>
        </div>
        <div>
            <input type="radio" name="panel" id="panel-7"/>
            <label for="panel-7">{(new Date().getDate())+6}<br></br>{Math.round(data.daily[6].temp.day)}°C</label>
            <div className="accordion__content accordion__content--small">
                <h2 className="accordion__header">Are Enjoying the Weather?</h2>
                <p className="accordion__body">Morning {(data.daily[6].temp.morn)} °C DayTime{( data.daily[6].temp.day)}°C*****Evening{(data.daily[6].temp.eve)}°C*****Night{(data.daily[6].temp.night)}°C</p>
            </div>
        </div>

    </div>
</div>
    )
}

