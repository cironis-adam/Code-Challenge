import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "search"
})

export class SearchPipe {
    transform (value, queryString) {
        if (value==null) {
            return null;
        }
        if (value=="") {
            return null;
        }

        if(queryString !== undefined){
            return   value.filter(item=>item.locationName.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
        }else{
            return value;
        }
    }
}
