import { AxiosInstance } from 'axios';

import { buildImageForm } from '../../../../utils/buildImageForm';

import { getProductsPath } from './Products';
import type { ProductModifierImage } from './types';

class ProductModifierImages {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  create(
    productId: number,
    modifierId: number,
    valueId: number,
    imagePath: string,
  ): ProductModifierImage['CreateResponse'] {
    const imageForm = buildImageForm(imagePath);

    return this.client.post(
      `${getProductsPath(productId)}/modifiers/${modifierId}/values/${valueId}/image`,
      imageForm,
      {
        headers: { ...imageForm.getHeaders() },
      },
    );
  }
}

export default ProductModifierImages;
