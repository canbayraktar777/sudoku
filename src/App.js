import React from 'react';
import styles from './App.module.scss';

export default class App extends React.Component {

  constructor(){
    super();

    let rows = [];
    for(let i = 0; i < 9; i += 1){
      let row = [];
      for(let j = 0; j < 9; j += 1){
        row.push({
          prob: [1,2,3,4,5,6,7,8,9],
          value: 0
        });
      }
      rows.push(row);
    }

    this.state = {
      rows: rows,
      size: 9,
      level: 1
    };
  }

  getNewSudoku(){
    fetch(`http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=${this.state.size}&level=${this.state.level}`).then(res => {
      console.log(res);
    });
  }

  componentDidMount(){
    this.getNewSudoku();
  }

  render(){
    return (
      <div className={styles.app}>
        <header className="App-header">
          
        </header>
        <main>
          <div className={styles.app}>
            {
              this.state.rows.map(row => 
                <div className={styles.row}>
                  {
                    row.map( cell => 
                      <div className={styles.cell}>
                        {cell.value || ""}
                      </div>  
                    )
                  }
                </div>
              )
            }
          </div>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}