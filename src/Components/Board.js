import React from "react"; //
import { connect } from "react-redux";
import Hero from "./Hero";
import Field from "./Field";
import Hand from "./Hand";
import TurnButton from "./TurnButton";
import Mana from "./Mana";
import combatHandler from "../gameplayHandlers/combatHandler";
import playCardHandler from "../gameplayHandlers/playCardHandler";
import startTurnHandler from "../gameplayHandlers/startTurnHandler";
import heroPowerHandler from "../gameplayHandlers/heroPowerHandler";
import onMouseDownHandler from "../dragAndDrop/onMouseDownHandler";
import onMouseMoveHandler from "../dragAndDrop/onMouseMoveHandler";
import onMouseUpHandler from "../dragAndDrop/onMouseUpHandler";
import CharacterCreation from "./CharacterCreation";
import * as _ from "lodash";
import { setPlayers } from "../Redux/actions";
import gameStartHandler from "../gameplayHandlers/gameStartHandler";
import Log from "./Log";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "characterCreation"
    };
    this.dragging = null;
  }

  handleClassSelection = desiredClass => {
    const temp = _.cloneDeep(this.props.players);
    temp[0].class = desiredClass;
    this.props.setPlayers(temp);
    this.setState({
      view: "playing",
      focus: null
    });
  };

  componentDidMount() {
    gameStartHandler();

    startTurnHandler(0);

    document.addEventListener("mousedown", e => {
      if (this.props.currentTurn === this.props.playerId) {
        this.dragging = onMouseDownHandler(
          e,
          document,
          this.dragging,
          this.props.players
        );
        if (this.dragging) {
          if (this.dragging.originIdentity === "hero-power") {
            const outcome = heroPowerHandler(
              this.dragging.originPlayerId,
              this.dragging.playerClass
            );
            this.dragging = null;
          }
        }
      }
    });
    document.addEventListener("mousemove", e => {
      this.handleChangeFocus(e.target);
      this.dragging = onMouseMoveHandler(
        e,
        document,
        this.dragging,
        this.props.players
      );
    });

    document.addEventListener("mouseup", () => {
      this.dragging = onMouseUpHandler(
        document,
        this.dragging,
        this.props.players
      );
      if (this.dragging) {
        switch (this.dragging.originIdentity) {
          case "hand":
            this.dragging = this.handlePlaceCard(this.dragging);
            break;
          case "field":
            this.dragging = this.handleCombat(this.dragging);
            break;
          default:
        }
      }
      this.dragging = null;
    });
  }

  handleChangeFocus = target => {
    if (target) {
      if (
        target.dataset.identity === "field" ||
        target.dataset.identity === "hand"
      ) {
        let focus;
        if (target.dataset.identity === "field") {
          if (!this.props.players[target.dataset.playerid].field[target.dataset.id]){
            return
          }
          focus = this.props.players[target.dataset.playerid].field[target.dataset.id];
          this.setState({
            focus
          })
        }
        if (target.dataset.identity === "hand") {
          if (!this.props.players[target.dataset.playerid].hand[target.dataset.id] || target.dataset.playerid === '1'){
            return
          }
          focus = this.props.players[target.dataset.playerid].hand[target.dataset.id];
       
          this.setState({
            focus
          });
        }
      } else {
        this.setState({
          focus: null
        });
      }
    }
  };

  handlePlaceCard = dragging => {
    const outcome = playCardHandler(
      dragging.originIdentity,
      dragging.originPlayerId,
      dragging.originHandFieldId,
      dragging.destinationIdentity,
      dragging.destinationPlayerId,
      dragging.destinationHandFieldId,
      false
    );
    //log(outcome);
    return null;
  };

  handleCombat = dragging => {
    const outcome = combatHandler(
      dragging.originIdentity,
      dragging.originPlayerId,
      dragging.originHandFieldId,
      dragging.destinationIdentity,
      dragging.destinationPlayerId,
      dragging.destinationHandFieldId,
      false
    );

    //console.log(outcome);
    return null;
  };

  render() {
    const playerSide =
      this.props.currentTurn === this.props.playerId
        ? "current-turn-side side"
        : null;
    const enemySide =
      this.props.currentTurn === this.props.enemyId
        ? "current-turn-side side"
        : null;
    const content =
      this.state.view === "characterCreation" ? (
        <CharacterCreation handleOnClick={this.handleClassSelection} />
      ) : (
        <div id="frame">
          <div id="board">
            <div className={enemySide}>
              <div className="hero">
                <Hero
                  health={this.props.enemyHealth}
                  playerId={this.props.enemyId}
                  players={this.props.players}
                />
              </div>
              <div className="mana">
                <Mana
                  currentMana={this.props.enemyCurrentMana}
                  totalMana={this.props.enemyTotalMana}
                />
              </div>
              <div className="hand">
                <Hand
                  hand={this.props.enemyHand}
                  playerId={this.props.enemyId}
                />
              </div>
              <div className="field">
                <Field
                  field={this.props.enemyField}
                  playerId={this.props.enemyId}
                  currentTurn={this.props.currentTurn}
                  yourField={false}
                />
              </div>
            </div>

            <div className="turnButton">
              <TurnButton playerId={this.props.playerId} />
            </div>

            <div className={playerSide}>
              <div className="field">
                <Field
                  field={this.props.yourField}
                  playerId={this.props.playerId}
                  currentTurn={this.props.currentTurn}
                  yourAsset={true}
                  currentMana={this.props.yourCurrentMana}
                />
              </div>
              <div className="hand">
                <Hand
                  hand={this.props.yourHand}
                  playerId={this.props.playerId}
                  currentMana={this.props.yourCurrentMana}
                  currentTurn={this.props.currentTurn}
                  yourAsset={true}
                />
              </div>
              <div className="mana">
                <Mana
                  currentMana={this.props.yourCurrentMana}
                  totalMana={this.props.yourTotalMana}
                />
              </div>
              <div className="hero">
                <Hero
                  health={this.props.yourHealth}
                  playerId={this.props.playerId}
                  players={this.props.players}
                />
              </div>
            </div>
          </div>
          <div id="log">
            <Log focus={this.state.focus} playerId={this.props.playerId} log={this.props.log} />
          </div>
        </div>
      );
    if (this.props.players[0].health <= 0) {
      alert("YOU LOST");
    }
    if (this.props.players[1].health <= 0) {
      alert("YOU WON");
    }
    return <div>{content}</div>;
  }
}
const mapStateToProps = ({ playerId, enemyId, currentTurn, players, log }) => ({
  yourHand: players[playerId].hand,
  yourField: players[playerId].field,
  yourCurrentMana: players[playerId].currentMana,
  yourTotalMana: players[playerId].totalMana,
  enemyHand: players[enemyId].hand,
  enemyField: players[enemyId].field,
  enemyCurrentMana: players[enemyId].currentMana,
  enemyTotalMana: players[enemyId].totalMana,
  playerId,
  enemyId,
  currentTurn,
  players,
  enemyHealth: players[enemyId].health,
  yourHealth: players[playerId].health,
  log
});

const mapDispatchToProps = dispatch => ({
  setPlayers: players => dispatch(setPlayers(players))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
