# -*- coding: utf-8 -*-

# ------------------------------------------------------------------------------
#
#   Copyright 2018 Fetch.AI Limited
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
#
# ------------------------------------------------------------------------------


from oef.schema import DataModel, AttributeSchema


PARKING_PRICE_PER_1HOUR = AttributeSchema("price_per_1hour",
                                  bool,
                                  is_attribute_required=True,
                                  attribute_description="Provides the price per 1 hour of parking.")

PARKING_JOURNEY_MODEL = DataModel("journey",
                               [PARKING_PRICE_PER_1HOUR],
                               "All possible parking data.")
