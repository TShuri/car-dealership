import axios from 'axios'
import { Car } from '@/models/Car'

export const getCars = async () => {
    try {
        const response = await axios.get('http://localhost/8000')

        if (response.status === 200) {
            console.log('id_car', response.data.id_car)
            console.log('brand', response.data.brand)
            console.log('model', response.data.model)

            return response.data
        } else {
            console.error('error get car')

            return null
        }
    } catch (error) {
        return error
    }    
}