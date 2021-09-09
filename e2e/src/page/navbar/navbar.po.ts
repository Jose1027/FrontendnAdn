import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkFinca = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkReserva = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickBotonFinca() {
      await this.linkFinca.click();
    }

        async clickBotonReserva() {
          await this.linkReserva.click();
        }
}
