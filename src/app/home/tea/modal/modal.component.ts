import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
})
export class Modal{
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<Modal>) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(Modal);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}