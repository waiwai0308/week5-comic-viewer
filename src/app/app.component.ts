import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  viewMode = true;

  chapterSelect = false;
  pageSelect = false;

  comicData = {
    name: 'MY HEXSCHOOL',
    generes: 'Fusce/vehicula/dolor',
    author: 'Namae Shiranai',
    status: 'Ongoing',
    rate: 3,
    summary: '<p>If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die.</p><p>Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.</p>',
    img: 'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/comiccover.png',
    book: [
      {
        chapter: 1,
        status: '',
        title: 'Chapter 1: The F2E Challenge Start!', 
        page: [
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-1.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-2.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-3.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-4.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-5.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-6.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-7.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-8.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-9.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-10.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-11.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book1/storyboard-12.png'
        ]
      },{
        chapter: 2,
        status: 'latest',
        title: 'Chapter 2: Todo List is Going Crazy!', 
        page: [
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-12.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-11.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-10.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-9.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-8.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-7.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-6.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-5.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-4.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-3.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-2.png',
          'https://waiwai0308.github.io/week5-comic-viewer/dist/assets/book2/storyboard-1.png'
        ]
      }
    ]
  }

  nowRead = {
    chapter: 1,
    page: 1
  }

  readPage =  this.comicData.book[0].page;

  changeChapter(chapter,mode){
    if(mode === 'back'){
      this.nowRead.chapter = chapter;
      this.nowRead.page = this.comicData.book[chapter - 1].page.length;
  
      this.readPage = this.comicData.book[chapter - 1].page;
      return;
    }
    this.nowRead.chapter = chapter;
    this.nowRead.page = 1;

    this.readPage = this.comicData.book[chapter - 1].page;
  }

  changePage(page){
    if(page === '+1'){
      if(this.nowRead.page === this.readPage.length && this.nowRead.chapter === this.comicData.book.length){
        return;
      }else{
        if(this.nowRead.page === this.readPage.length && this.nowRead.chapter < this.comicData.book.length){
          let newChapter = this.nowRead.chapter + 1;
          this.changeChapter(newChapter,'');
          return;
        }else{
          this.nowRead.page++;
          return;
        }
      }
    }else if(page === '-1'){
      if(this.nowRead.page === 1 && this.nowRead.chapter < this.comicData.book.length){
        return;
      }else{
        if(this.nowRead.page === 1 && this.nowRead.chapter == this.comicData.book.length){
          let newChapter = this.nowRead.chapter - 1;
          this.changeChapter(newChapter,'back');
          return;
        }else{
          this.nowRead.page--;
          return;
        }
      }
    }
    this.nowRead.page = page;
  }
}
