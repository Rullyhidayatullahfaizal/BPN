import {features} from "../data/indonesia.json"

class LoadCountriesTask{
    load = (SetState) => {
        SetState(features)
    }
}

export default LoadCountriesTask