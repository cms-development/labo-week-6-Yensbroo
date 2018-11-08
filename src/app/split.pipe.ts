import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "split"
})
export class SplitPipe implements PipeTransform {
  transform(val: string, params: string[]): any {
    const res = val.split(params[0]);
    return res[1];
  }
}
