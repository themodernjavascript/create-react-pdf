import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from './Document'

const Table = (props) => {
  const {
    // ======= Data =======
    head,
    body,
    // ======= Styling =======
    theme,
    styles,
    headerStyles,
    bodyStyles,
    alternateRowStyles,
    columnStyles,
    // ======= Properties =======
    startY,
    margin,
    pageBreak,
    tableWidth,
    showHeader,
    tableLineColor,
    tableLineWidth,
    // ======= Hooks =======
    createdHeaderCell,
    createdCell,
    drawHeaderRow,
    drawRow,
    drawHeaderCell,
    drawCell,
    addPageContent
  } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.autoTable({
          head,
          body,
          // ======= Styling =======
          theme,
          styles,
          headerStyles,
          bodyStyles,
          alternateRowStyles,
          columnStyles,
          // ======= Properties =======
          startY,
          margin,
          pageBreak,
          tableWidth,
          showHeader,
          tableLineColor,
          tableLineWidth,
          // ======= Hooks =======
          createdHeaderCell,
          createdCell,
          drawHeaderRow,
          drawRow,
          drawHeaderCell,
          drawCell,
          addPageContent
        })
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

Table.propTypes = {
  // ======= Data =======
  head: PropTypes.array.isRequired,
  body: PropTypes.array,
  // ======= Styling =======
  theme: PropTypes.string,
  styles: PropTypes.object,
  headerStyles: PropTypes.object,
  bodyStyles: PropTypes.object,
  alternateRowStyles: PropTypes.object,
  columnStyles: PropTypes.object,
  // ======= Properties =======
  startY: PropTypes.bool,
  margin: PropTypes.number,
  pageBreak: PropTypes.string,
  tableWidth: PropTypes.string,
  showHeader: PropTypes.string,
  tableLineColor: PropTypes.number,
  tableLineWidth: PropTypes.number,
  // ======= Hooks =======
  createdHeaderCell: PropTypes.func,
  createdCell: PropTypes.func,
  drawHeaderRow: PropTypes.func,
  drawRow: PropTypes.func,
  drawHeaderCell: PropTypes.func,
  drawCell: PropTypes.func,
  addPageContent: PropTypes.func
}

Table.defaultProps = {
  // ======= Styling =======
  theme: 'striped',
  styles: {},
  headerStyles: {},
  bodyStyles: {},
  alternateRowStyles: {},
  columnStyles: {},
  // ======= Properties =======
  startY: false,
  margin: 40,
  pageBreak: 'auto',
  tableWidth: 'auto',
  showHeader: 'everyPage',
  tableLineColor: 200,
  tableLineWidth: 0,
  // ======= Hooks =======
  createdHeaderCell: (cell, data) => ({ cell, data }),
  createdCell: (cell, data) => ({ cell, data }),
  drawHeaderRow: (row, data) => ({ row, data }),
  drawRow: (row, data) => ({ row, data }),
  drawHeaderCell: (cell, data) => ({ cell, data }),
  drawCell: (cell, data) => ({ cell, data }),
  addPageContent: (data) => data
}

export default Table
