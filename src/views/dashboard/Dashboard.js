import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardTitle,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

// TODO:Line Chart Import
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
)

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  // TODO: json Data From Local Storage
  const [cloweeData, setcloweeData] = useState([])
  useEffect(() => {
    fetch('cloweeData.json')
      .then((res) => res.json())
      .then((data) => setcloweeData(data))
  }, [])

  // TODO:FOR TOTAL SUM:
  let sum = 0
  cloweeData.forEach((data) => {
    sum = sum + data.physicalChance * data.rateChance
  })
  console.log('total sum', sum)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'error' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]
  const labels = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  const data_1 = {
    labels,
    datasets: [
      {
        label: 'Total Amount',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: getStyle('--cui-info'),
        tension: 0.3,
        borderWidth: 3,
        hitRadius: 12,
        hoverRadius: 14,
      },
    ],
  }
  const options = {}

  return (
    <>
      <WidgetsDropdown />
      <CCard className="shadow-lg">
        <CCardBody>
          <CRow>
            {/* TODO:Add table */}
            <CCardTitle className="text-center fs-4 fw-semibold mb-3">
              Today Machines Summary
            </CCardTitle>
            <CTable align="middle" className="mb-1 table" responsive>
              <CTableHead className="border-bottom-2 border-bottom-dark" color="white">
                <CTableRow>
                  {/* <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell> */}
                  <CTableHeaderCell className="text-start">Machine title </CTableHeaderCell>
                  <CTableHeaderCell className="text-start">Cloud Chances</CTableHeaderCell>
                  <CTableHeaderCell className="text-start">Physical Chances</CTableHeaderCell>
                  <CTableHeaderCell className="text-start">Chances Rate</CTableHeaderCell>
                  <CTableHeaderCell className="text-start">Prizes</CTableHeaderCell>
                  <CTableHeaderCell className="text-start">Sells(tk) </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {cloweeData.map((item, _id) => (
                  <CTableRow v-for="item in tableItems" key={_id}>
                    <CTableDataCell className="text-start">
                      <div>{item.name} </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-start">
                      <div className="text-start">{item.cloudChance}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-start">
                      <div>{item.physicalChance}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-start">
                      <div>{item.rateChance}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-start">
                      <div>{item.prize}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <div>{item.physicalChance * item.rateChance}</div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="shadow-lg mt-4">
        <CCardBody>
          <CRow>
            {/* TODO: All Machine Summary */}
            <CCardTitle className="text-center fs-4 fw-semibold mb-2">
              All Machines Summary
            </CCardTitle>
            {/* TODO:Add table */}
            <CTable align="middle" className="mb-1 table" responsive>
              <CTableHead className="border-bottom-2 border-bottom-dark" color="white">
                <CTableRow>
                  {/* <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell> */}
                  <CTableHeaderCell className="text-start">Machine title </CTableHeaderCell>
                  <CTableHeaderCell className="text-start">Address</CTableHeaderCell>
                  <CTableHeaderCell className="text-start">Chances Rate</CTableHeaderCell>
                  <CTableHeaderCell className="text-start">View Data</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {cloweeData.map((item, _id) => (
                  <CTableRow v-for="item in tableItems" key={_id}>
                    {/* <CTableDataCell className='text-center' className="text-center">
                      <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                    </CTableDataCell> */}
                    <CTableDataCell className="text-start">
                      <div>{item.name} </div>
                      {/* <div className="small text-medium-emphasis">
                        <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                        {item.user.registered}
                      </div> */}
                    </CTableDataCell>
                    <CTableDataCell className="text-start">
                      {/* <CIcon size="xl" icon={item.country.flag} title={item.country.name} /> */}
                      <div className="text-start">{item.address}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-start">
                      {/* <CIcon size="xl" icon={item.payment.icon} /> */}
                      <div>{item.rateChance}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      {/* <div className="small text-medium-emphasis">Last login</div>
                      <strong>{item.activity}</strong> */}
                      <div className="text-start ">
                        <CButton color="info">View</CButton>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="shadow-lg mt-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <CCardTitle>Sales Per Day Of This Month</CCardTitle>
              <div className="small text-medium-emphasis">Saturday To Friday</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'day'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <Line data={data_1} options={options}></Line>
        </CCardBody>
      </CCard>
      <CCard className="mb-5 mt-4 ">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <CCardTitle>Sales Per Day Of This Month</CCardTitle>
              <div className="small text-medium-emphasis">Saturday To Friday</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'day'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '500px', marginTop: '40px' }}
            data={{
              labels: [
                'Saturday',
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
              datasets: [
                {
                  label: 'Total Amount',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 3,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(100 / 5),
                    max: 100,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  hitRadius: 5,
                  hoverRadius: 5,
                  hoverBorderWidth: 5,
                },
              },
            }}
          />
        </CCardBody>
        {/* <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter> */}
      </CCard>
      <WidgetsBrand withCharts />
    </>
  )
}

export default Dashboard
