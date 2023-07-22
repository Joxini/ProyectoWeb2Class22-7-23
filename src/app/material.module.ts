import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
const lista = [MatButtonModule, MatCardModule,
  MatTableModule,MatInputModule,MatFormFieldModule

]
@NgModule({
    //los ... es para meter los elementos de la lista
    exports: [...lista],
    imports: [...lista],
  })
  export class MaterialModule {}