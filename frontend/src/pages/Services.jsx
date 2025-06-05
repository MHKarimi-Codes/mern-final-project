
import React from 'react'
import '../style/Service.css'

const Services = () => {
  return (
    <div className='service-root'>
      <h1>service</h1>
      <table>
        <tr>
            <td>Signature Haircut</td>
            <td>$24.99</td>
        </tr>
        <tr>
            <td>Haircut</td>
            <td>$19.99</td>
        </tr>
        <tr>
            <td>Beard Shaving</td>
            <td>$29.99</td>
        </tr>
        <tr>
            <td>Beard Trim</td>
            <td>$14.99</td>
        </tr>
        <tr>
            <td>Cut and Shave</td>
            <td>$34.99</td>
        </tr>
        <tr>
            <td>Eyebrow Threading</td>
            <td>$9.99</td>
        </tr>
      </table>
    </div>
  )
}

export default Services
