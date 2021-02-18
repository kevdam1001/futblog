import React, { Component } from 'react';
import './SearchSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DataTable from 'react-data-table-component';
import CardItem from './CardItem';

const tablaResultados =[
    { año:"2021", tag:"players", image:"images/bruno potm.jpeg"},
    { año:"2002", tag:"players", image:"images/adama.jpeg"},
    { año:"2003", tag:"others", image:"images/live stream.jpeg"},
    { año:"2005", tag:"squads", image:"images/team.jpeg"},
    { año:"2006", tag:"squads", image:"images/arnold packed.jpeg"}
  ];

  const paginacionOpciones={
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  }
  
  class App extends Component {
    state={
      busqueda: '',
      campeones: [],
      columnas:[]
    }
  
    onChange=async e=>{
      e.persist();
      await this.setState({busqueda: e.target.value});
      this.filtrarElementos();
    }
  
    asignarColumnas=()=>{
  
      const columnas = [
        {
          name: 'ID',
          selector: 'id',
          sortable: true
        },
        {
          name: 'Año',
          selector: 'año',
          sortable: true
        },
        {
          name: 'Tag',
          selector: 'tag',
          sortable: true,
          grow: 1
        },
        {
          name: 'image',
          selector: 'image',
          sortable: true,
          right:true
        }
      ];
  
      this.setState({columnas: columnas});
    }
  
    filtrarElementos=()=>{
      var search=tablaResultados.filter(item=>{
        if(item.tag.toString().includes(this.state.busqueda) ||
        item.image.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
        item.año.toLowerCase().includes(this.state.busqueda)
        ){
          return item;
        }
      });
      this.setState({campeones: search});
    }
    crearIndex=()=>{
      var contador=1;
      tablaResultados.map(elemento=>{
        elemento["id"]=contador;
        contador++;
      })
    }
  
    componentDidMount(){
      this.crearIndex();
      this.asignarColumnas();
  this.setState({campeones: tablaResultados});
    }
    
  render(){
    return (
      <div>
      <h1 className='search_tittle'>SEARCH</h1>
      <div className="searchSection">
      <div className="table-responsive">
        <div className="barraBusqueda">
              <input
                type="text"
                placeholder="Buscar"
                className="textField"
                name="busqueda"
                value={this.state.busqueda}
                onChange={this.onChange}
              />
            </div>
        <div>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
          {
            this.state.campeones.map(campeon => (
              <CardItem
              src={campeon.image}
              text='Check out this 200k pro team'
              label={campeon.tag}
              path='/services'
              />
            ))}
        </ul>
        </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
  }
  export default App;