import React from 'react';
import { BITCOINLIST,BITNAMELIST,TICKERSPEED,GETINTERVAL } from "../constants";
import { cryptoCurrencyData } from "../crud";
import { connect } from "react-redux";

class NewsTicker extends React.Component {
  
    constructor(props) {
      super();
      this.state = {
        message: "".padEnd(800, '.'),
        cryptocurrencies: []
      };
    };
    indexcounter=0;
    cryptypesLength=BITCOINLIST.length
    animationStyle={animation: "marquee 10s linear infinite"}
    tick=()=>{
      
      let bitAbbrv=BITCOINLIST[this.indexcounter%this.cryptypesLength];
      let bitName=BITNAMELIST[this.indexcounter%this.cryptypesLength];
      cryptoCurrencyData(bitAbbrv, bitName);
      this.indexcounter++;
      if(this.indexcounter === this.cryptypesLength)
      {
        clearInterval(this.timer);
      }
    };
    componentDidMount(){
        this.timer = setInterval(this.tick, GETINTERVAL);
    };
    componentDidUpdate(prevprops){
      if (this.props.cryptocurrencies !== prevprops.cryptocurrencies)
      {
        let message="";
        let values=[];
        let arr=Object.entries(this.props.cryptocurrencies)

        arr.map((el)=>{
          let newMessage="[";
          values=Object.entries(el[1]);
          values.reverse();
          values.forEach((val)=>{
            newMessage+=val[0]+":"+val[1]+" ";
          })
          newMessage+="]  "
          message+=newMessage;
        })
        message=message.padEnd(800, '.');
        this.setState({message:message});
      }
    };
    componentWillUnmount(){
        clearInterval(this.timer);
    };
    render() {
		return (
      <div className="marquee"><span className="displayer" style={ {animation: `marquee ${ TICKERSPEED }s linear infinite`} }>{this.state.message}</span></div>
		);
	}
}
const mapStateToProps = state => {
  return { cryptocurrencies: state.cryptocurrencies };
};
export default connect(mapStateToProps)(NewsTicker);