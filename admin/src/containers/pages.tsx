/**
 * Dependencies
 */

import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Icon, Divider, Button } from 'antd';

/**
 * Actions
 */

import { fetchPages } from '../actions/pagesActions';

/**
 * Components
 */

import Dashboard from '../components/layout';
import PagesTable from '../components/pages/table';

/*!
 * Expo
 */

class Pages extends React.Component<{
  fetchPages(): any;
}, any> { 
  componentDidMount() {
    this.props.fetchPages();
  }

  render() {
    return (
      <Dashboard>
        <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
          <h1 style={{ margin: 0 }}>
            Страницы
            <Button type="primary" style={{ float: 'right', marginTop: 5 }} >Добавить страницу</Button>
          </h1>
        </header>
        <PagesTable />
      </Dashboard>
    );
  }
}

export default connect(
  null,
  { fetchPages },
)(Pages);
