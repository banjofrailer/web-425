/**
 * Title: composer-details.component.ts
 * Author: Professor Krasso
 * Date: 2 August 2020
 * Modified By: Sarah Kovar
 * Description: Composer details component
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10)

    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }

  }

  ngOnInit(): void {
  }

}
