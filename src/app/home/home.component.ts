import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { open, BaseDirectory } from "@tauri-apps/plugin-fs"
// if "$APPCONFIG/foo/bar.txt" contains the text "hello world":
/*const file = await open("/test.txt", { baseDir: BaseDirectory.AppConfig });
const buf = new Uint8Array(100);
const numberOfBytesRead = await file.read(buf); // 11 bytes
const text = new TextDecoder().decode(buf);  // "hello world"
await file.close();
*/

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
  imports: [RouterLink, TranslateModule]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
const text2: HTMLElement | null = document.getElementById("filetest");
if (text2) {
  text2.textContent = "22222222222222222222222222222222222";
  console.log("valor test:",text2.textContent);
}

const readFile = async () => {
  try {
    const file = await open("/tmp/test.txt", { baseDir: BaseDirectory.AppConfig });
    const buf = new Uint8Array(100);
    const numberOfBytesRead = await file.read(buf); // 11 bytes
    const text = new TextDecoder().decode(buf);  // "hello world"
    console.log("valor test:",text);
    const text2 = document.getElementById("filetest");
    if (text2) {
      text2.textContent = text;
    }
    await file.close();
  } catch (error) {
    console.error("Error reading file:", error);    
  }

}

readFile()
  }
}
