import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutPipe } from './pipe/shortcut.pipe';
import { SafePipe } from './pipe/safe.pipe';

@NgModule({
  declarations: [ShortcutPipe, SafePipe],
  exports: [ShortcutPipe, SafePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
