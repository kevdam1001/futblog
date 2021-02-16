import React, { Component } from 'react';
import './SearchSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DataTable from 'react-data-table-component';
import CardItem from './CardItem';

const tablaResultados =[
    { año:"2000", tag:"players", image:"images/bruno potm.jpeg"},
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
      <div className="searchSection">
      <h1>Search</h1>
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
              <button type="button" className="btnBuscar" /*onClick={onClear}*/>
                {" "}
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
        <DataTable 
        columns={this.state.columnas}
        data={this.state.campeones}
        title="Resultados para tu busqueda"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight="600px"
        noDataComponent={<span>No se encontró ningún elemento</span>}
        />
        
        <CardItem
              src={this.filtrar}
              text='Check out this 200k pro team'
              label='Squads'
              path='/services'
            />
      </div>
      </div>
    );
  }
  }
  export default App;