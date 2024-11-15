const { text } = require("express");















async function api_currentMatches_fetch() {
    const currentMatches_api = "https://api.cricapi.com/v1/currentMatches?apikey=67dcb328-b01f-4cee-aa7e-e1f9ba31ce5d&offset=0";
  
    const response = await fetch(currentMatches_api);
    const json_data = await response.json();
    console.log("current_Matches_data:",json_data.data);
    //currebt matches data = CMD
let CMD=json_data.data
// adding html element 

let match_list=document.getElementsByClassName("match_list")
console.log("match_list",match_list)



for(let i=0;i<CMD.length;i++){

    match_list[0].innerHTML+=
    `
    <tr>
                      <td>
                        <span class="matches__time matches__time--live">8:00</span><span class="tag tag--red tag--icon"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="currentColor" cx="4" cy="4" r="4"/></svg>Live</span>
                      </td>
                      <td>
                        <div class="score score--vertical">
                          <div class="score__team score__team--vertical">
                            <span>${team_1}</span><img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/HlIrXZRP96tv0H1uiiN0Jg_48x48.png" />
                          </div>
                          <p class="score__result score__result--vertical">
                            <span class="score__goals">3</span><span class="score__separator">:</span><span class="score__goals">2</span>
                          </p>
                          <div class="score__team score__team--vertical">
                            <img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/WKH7Ak5cYD6Qm1EEqXzmVw_48x48.png" /><span>${team_2}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="tag tag--green rating rating--up">1.63</span>
                      </td>
                      <td>
                        <span class="tag rating">2.13</span>
                      </td>
                      <td>
                        <span class="tag rating">1.82</span>
                      </td>
                      <td>
                        <a class="matches__stats btn btn--icon"><span class="sr-only">Stats</span><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" /> </svg></a>
                      </td>
                    </tr>
    `


}

// add html element-end

}

//will update on refreshing 
// addEventListener('onload',api_currentMatches_fetch())

function toggleInvoice(event) {
  event.preventDefault();
  const invoice = document.getElementById('invoice');
  invoice.classList.toggle('opened');
}

function deleteBet(event) {
  event.preventDefault();
  const betElement = event.currentTarget.closest('.bet');
  if (betElement) {
    betElement.remove();
  }
}

