import { Page } from '@playwright/test';

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async open(url: string) {
    await this.page.goto(url);
}


get currentPage(): Page {
    return this.page;
}

}