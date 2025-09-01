function bet_now_clicked(i){
console.log("bet_now_clicked",i);
}
















// ${addEventListener("click",bet_now_clicked(i))}









async function api_currentMatches_fetch() {
 
  const currentMatches_api =
    "https://api.cricapi.com/v1/cricScore?apikey=";//free at https://cricketdata.org/

  const response = await fetch(currentMatches_api);
  const json_data = await response.json();
  console.log("current_Matches_data:", json_data.data);

  let CMD = json_data.data;
  // adding html element

  let match_list = document.getElementsByClassName("match_list");
  console.log("match_list", match_list);

  for (let i = 0; i < CMD.length; i++) {
    match_list[0].innerHTML += `
    <tr>
      <td>
        <span class="matches__time matches__time--live">${CMD[i].matchType}</span> 
        <button style="all: unset;" class="btn${i}" onclick='handleBetNowClick(${JSON.stringify(CMD[i])})'>
          <span class="tag tag--green tag--icon">
            <svg width="6" height="6" viewBox="0 0 8 8">
              <circle fill="currentColor" cx="4" cy="4" r="4"/>
            </svg>
            Bet Now
          </span>
        </button>
      </td>
      <td>
        <div class="score score--vertical">
          <div class="score__team score__team--vertical">
            <span>${CMD[i].t1}</span>
            <img alt="" src="${CMD[i].t1img}" onerror="this.onerror=null; this.src='default_image.png';"/>
          </div>
          <p class="score__result score__result--vertical">
            <span class="score__goals">${CMD[i].t1s}</span>
            <span class="score__separator">:</span>
            <span class="score__goals">${CMD[i].t2s}</span>
          </p>
          <div class="score__team score__team--vertical">
            <img alt="" src="${CMD[i].t2img}" /><span>${CMD[i].t2}</span>
          </div>
        </div>
      </td>
      <td>
        <span class="tag tag--green rating rating--up">${CMD[i].status}</span>
      </td>
    </tr>`;
  }

  // add html element-end
}

// Define the function to handle the button click
function handleBetNowClick(match) {
  console.log("Bet Now button clicked for match:", match);


let matchDetails = document.getElementsByClassName("tag")[0];
matchDetails.innerHTML = `<span class="tag tag--green tag--icon"><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"></path> </svg>${match.status}</span>`;



  let matchDetails1 = document.getElementsByClassName("featured-live__stage")[0];
  matchDetails1.innerHTML = `
    <h3>
      ${match.matchType.toUpperCase()}
    </h3>
    <small>${match.series.toUpperCase()}</small>
  `;

let matchDetails2 = document.getElementsByClassName("featured-live__score")[0];
matchDetails2.innerHTML = `<p class="score__team score__team--home">
                    <img src="${match.t1img}"><span>${match.t1}</span>
                  </p>
                  
                  <div class="score__info">
                    <p class="score__result">
                      <span class="score__winner">${match.t1s}</span><span class="score__separator">:</span><span class="score__loser">${match.t2s}</span>
                    </p>
                    <p class="score__time">
                     
                    </p>
                  </div>
                  <p class="score__team score__team--away">
                    <img src="${match.t2img}"><span>${match.t2}</span>
                  </p>
                </div>
                  
                  
                  
                  `
  // Add your logic here
}

//will update on refreshing
addEventListener("onload",api_currentMatches_fetch());

function toggleInvoice(event) {
  event.preventDefault();
  const invoice = document.getElementById("invoice");
  invoice.classList.toggle("opened");
}

function deleteBet(event) {
  event.preventDefault();
  const betElement = event.currentTarget.closest(".bet");
  if (betElement) {
    betElement.remove();
  }
}
